"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { getTimeDiff, validateDate, validateNumber } from "./utils";

type Validator = (value: number | undefined) => [boolean, string];

const defaultResultState = {
  years: "--",
  months: "--",
  days: "--",
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
      <div className="h-px md:my-8 my-12 bg-gray-200 border-0 w-72 md:w-80 relative" />
      <button
        className="absolute bg-primary text-white px-4 py-2 rounded-full w-14 h-14  hover:bg-black  left-[calc(50%-1.75rem)] md:left-0 md:relative"
        type="submit"
      >
        <Image src="/images/age_calculator_app/icon-arrow.svg" alt="arrow" width={25} height={25} />
      </button>
    </div>
  );
};

const Result = ({ value, text }: { value: string; text: string }) => {
  return (
    <div className="flex text-5xl font-poppins-extra-bold-italic">
      <p className="text-primary">{value}</p>
      <p className="px-1">{text}</p>
    </div>
  );
};

export default function AgeCalculatorApp() {
  const [formState, setFormState] = useState<{ day?: number; month?: number; year?: number }>({});
  const [resultState, setResultState] = useState<{ years: string; months: string; days: string }>(defaultResultState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidDate, dateValidationErrorMessage] = validateDate(formState);

  const validators: { day: Validator[]; month: Validator[]; year: Validator[] } = {
    day: [
      (value: number | undefined) => [isValidDate || !isSubmitting, dateValidationErrorMessage],
      (value: number | undefined) => validateNumber(value, "Must be a valid day", 1, 31),
    ],
    month: [
      (value: number | undefined) => [isValidDate || !isSubmitting, ""],
      (value: number | undefined) => validateNumber(value, "Must be a valid month", 1, 12),
    ],
    year: [
      (value: number | undefined) => [isValidDate || !isSubmitting, ""],
      (value: number | undefined) => validateNumber(value, "Must be in the past", 0, new Date().getFullYear()),
      (value: number | undefined) => validateNumber(value, "Must be greater than 100", 100, new Date().getFullYear()),
    ],
  };

  return (
    <>
      <Head>
        <title>Age Calculator App</title>
        <meta name="description" content="Age Calculator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-poppins flex flex-col min-h-screen items-center justify-center bg-[#f0f0f0]">
        <div className="bg-white rounded-l-2xl rounded-t-2xl rounded-br-[100px] md:p-8 px-4 py-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);

              const validatorGroups = Object.keys(validators) as Array<keyof typeof validators>;
              const isValid = validatorGroups.every((key) =>
                validators[key].every((validator) => validator(formState[key])[0])
              );

              if (isValid && isValidDate) {
                // setIsSubmitting does not update state immediately, so we need to check isValidDate again
                const date = new Date(formState.year!, formState.month! - 1, formState.day!);
                const result = getTimeDiff(date, new Date());
                setResultState(result);
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
                validators={validators.day}
                onFocus={() => setIsSubmitting(false)}
              />
              <Input
                name="month"
                label="MONTH"
                placeholder="MM"
                setValue={(value) => setFormState({ ...formState, month: value })}
                value={formState.month}
                validators={validators.month}
                onFocus={() => setIsSubmitting(false)}
              />
              <Input
                name="year"
                label="YEAR"
                placeholder="YYYY"
                maxLength={4}
                setValue={(value) => setFormState({ ...formState, year: value })}
                value={formState.year}
                validators={validators.year}
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
