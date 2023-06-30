"use client";
import Head from "next/head";
import { type } from "os";
import { parse } from "path";
import { Fragment } from "react";
import { useState } from "react";

type Validator = (value: number | undefined) => [boolean, string];

const defaultResultState = {
  years: "--",
  months: "--",
  days: "--",
};

type ResultState = {
  years: string;
  months: string;
  days: string;
};

type FormState = {
  day?: number;
  month?: number;
  year?: number;
};

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  maxLength?: number;
  value?: number | undefined;
  setValue: (value: number | undefined) => void;
  validators?: Validator[];
  onFocus?: () => void;
};

const handleInputChange = (value: string, setValue: (value: number | undefined) => void) => {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    setValue(undefined);
  } else {
    setValue(parsedValue);
  }
};

const evaluateValidators = (value: number | undefined, validators: Validator[]) => {
  if (validators === undefined) {
    return [true, ""];
  }
  for (const validator of validators) {
    const [isValid, errMsg] = validator(value);
    if (!isValid) {
      return [false, errMsg];
    }
  }
  return [true, ""];
};

const Input = ({ name, label, placeholder, maxLength = 2, value, setValue, validators, onFocus }: InputProps) => {
  const [isValid, errMsg] = validators ? evaluateValidators(value, validators) : [true, ""];
  const borderColor = isValid ? "border-slate-300" : "border-red-400";
  const borderFocusColor = isValid ? "focus:border-primary" : "focus:border-red-400";
  const textColor = isValid ? "text-slate-500" : "text-red-400";

  return (
    <div className="flex flex-col font-bold tracking-widest">
      <label htmlFor={name} className={`text-[8px] font-poppins-extra-bold ${textColor}`}>
        {label}
      </label>
      <input
        size={4}
        name={name}
        maxLength={maxLength}
        id={name}
        placeholder={placeholder}
        className={`w-20 border border-solid ${borderColor} px-4 py-1 font-poppins-extra-bold  rounded-md ${borderFocusColor} focus:outline-none`}
        value={value ? value : ""}
        onChange={(e) => handleInputChange(e.target.value, setValue)}
        onFocus={() => onFocus && onFocus()}
      />
      <div className="pt-1">
        <label
          htmlFor={name}
          className={`absolute text-[7px] font-thin font-poppins-italic tracking-wide ${textColor} ${
            isValid ? "hidden" : ""
          }`}
        >
          {errMsg}
        </label>
      </div>
    </div>
  );
};

const FormButton = () => {
  return (
    <div className="flex items-center">
      <div className="h-px my-8 bg-gray-200 border-0 w-80" />
      <button
        className="bg-primary text-white px-4 py-2 rounded-full w-14 h-14 flex items-center justify-center hover:bg-black "
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 46 44">
          <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </button>
    </div>
  );
};

const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  formState: FormState,
  setResultState: (state: ResultState) => void
) => {
  e.preventDefault();

  const date = new Date(formState.year!, formState.month!, formState.day!);
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();
  const diffDate = new Date(diff);
  const years = diffDate.getUTCFullYear() - 1970;
  const months = diffDate.getUTCMonth();
  const days = diffDate.getUTCDate() - 1;

  setResultState({
    years: years.toString(),
    months: months.toString(),
    days: days.toString(),
  });
};

const Result = ({ value, text }: { value: string; text: string }) => {
  return (
    <div className="flex text-5xl font-poppins-extra-bold-italic">
      <p className="text-primary">{value}</p>
      <p className="px-1">{text}</p>
    </div>
  );
};

const validateDate = (state: FormState): boolean => {
  const date = new Date(state.year!, state.month! - 1, state.day!);
  if (date.toString() === "Invalid Date") {
    return false;
  }
  if (date.getFullYear() != state.year || date.getMonth() != state.month! - 1 || date.getDate() != state.day) {
    return false;
  }
  return true;
};

const validateNumber = (value: number | undefined, msg: string, min = 0, max = 100): [boolean, string] => {
  if (value === undefined) {
    return [true, msg];
  }
  return [value >= min && value <= max, msg];
};

export default function AgeCalculatorApp() {
  const [formState, setFormState] = useState<{ day?: number; month?: number; year?: number }>({});
  const [resultState, setResultState] = useState<{ years: string; months: string; days: string }>(defaultResultState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isValidDate = validateDate(formState);

  return (
    <>
      <Head>
        <title>Age Calculator App</title>
        <meta name="description" content="Age Calculator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-poppins flex flex-col min-h-screen items-center justify-center bg-[#f0f0f0]">
        <div className="bg-white rounded-l-2xl rounded-t-2xl rounded-br-[100px] p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              if (isValidDate) {
                handleFormSubmit(e, formState, setResultState);
                setIsSubmitting(false);
              } else {
                setResultState(defaultResultState);
              }
            }}
          >
            <div className="flex gap-4">
              <Input
                name="day"
                label="DAY"
                placeholder="DD"
                setValue={(value) => setFormState({ ...formState, day: value })}
                value={formState.day}
                validators={[
                  (value) => [isValidDate || !isSubmitting, "Must be a valid date"],
                  (value) => validateNumber(value, "Must be a valid day", 1, 31),
                ]}
                onFocus={() => setIsSubmitting(false)}
              />
              <Input
                name="month"
                label="MONTH"
                placeholder="MM"
                setValue={(value) => setFormState({ ...formState, month: value })}
                value={formState.month}
                validators={[
                  (value) => [isValidDate || !isSubmitting, ""],
                  (value) => validateNumber(value, "Must be a valid month", 1, 12),
                ]}
                onFocus={() => setIsSubmitting(false)}
              />
              <Input
                name="year"
                label="YEAR"
                placeholder="YYYY"
                maxLength={4}
                setValue={(value) => setFormState({ ...formState, year: value })}
                value={formState.year}
                validators={[
                  (value) => [isValidDate || !isSubmitting, ""],
                  (value) => validateNumber(value, "Must be in the past", 100, new Date().getFullYear()),
                ]}
                onFocus={() => setIsSubmitting(false)}
              />
            </div>
            <FormButton />
          </form>
          <section>
            <Result value={resultState.years} text="years" />
            <Result value={resultState.months} text="months" />
            <Result value={resultState.days} text="days" />
          </section>
        </div>
      </main>
    </>
  );
}
