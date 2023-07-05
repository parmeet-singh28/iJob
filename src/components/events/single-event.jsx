import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

const SingleEvent = ({ data }) => {
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p className='paragraph'>
      {data.description}
    </p>
      <p>Contact Email: {data.contactEmail}</p>
      <p>Contact PhoneNumber: {data.contactPhone}</p>
    </div>
  );
};

export default SingleEvent;
