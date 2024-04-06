'use client';

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import TextBox from '../components/TextBox';

const Page: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [convertedValue, setConvertedValue] = useState('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value.trim() !== '') {
      fetch(`https://localhost:7244/api/Utility/ConvertInputNumberToWords?input=${value}`)
        .then(response => {
          // console.log('Response:', response);
          if (!response.ok) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          return response.text();
        })
        .then(data => setConvertedValue(data))
        .catch(error => {
          setConvertedValue('');
          console.error('Error fetching data:', error);
        });
    } else {
      setConvertedValue('');
    }
  }, [value]);

  return (
    <>
    <main className="p-24">
      <div className="w-full lg:flex">
            <Image
              src="https://www.technologyonecorp.com/__data/assets/file/0020/236900/T1_2023_W-and-Y_no_tagline.svg"
              alt="technology one"
              width={220}
              height={35}
            />
      </div>
      <br />
      <div className="mx-auto bg-gray-900 p-6 rounded-md">
        <div className="mb-4">
          <span className="block text-gray-300">Input:</span>
          <TextBox
            id="input"
            value={value}
            onChange={handleChange}
            placeholder="Enter number here"
            className="px-4 py-4 mt-1 w-full bg-gray-800 text-gray-300 border-gray-700 rounded-md"
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-300">Output:</span>
          <div id="output" className={`px-4 py-4 mt-1 w-full bg-gray-900 ${isError ? 'text-red-300' : 'text-gray-300'}`}>{convertedValue}</div>
        </div>
      </div>
  </main>
  </>
  );
}

export default Page;