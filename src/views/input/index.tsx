import React, { FC } from 'react';

interface InputViewProps {
  placeholder: string;
  name: string;
  clickhandle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputView = ({
  className = '',
  info = '',
  label = '',
  ...props
}) => {
  return (
    <label className='flex flex-col gap-3 justify-start items-start relative rounded-xl w-full bg-transparent'>
      {label && (
        <p className=' text-base text-left text-white/70'>
          {label}{' '}
          {props.required && (
            <span className=' text-sm font-bold text-left text-[#f00]'>*</span>
          )}
        </p>
      )}
      <input
        className={`flex flex-col justify-center items-start h-14 relative px-4 rounded-xl  bg-transparent border border-white/[0.23] w-full ${className}`}
        {...props}
      />
      {info && <span className=' text-xs text-left text-white/70'>{info}</span>}
    </label>
  );
};
