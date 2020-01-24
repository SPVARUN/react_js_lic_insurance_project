import React from "react";

export default function ErrroMessage({ error }) 
{
  if (error) 
  {
    switch (error.type) 
    {
      case "required": return <p className='error'>This is required</p>;
      case "minLength": return <p className='error'>Your last name need minmium 2 charcaters</p>;
      case "pattern": return <p className='error'>Enter a valid email address</p>;
      case "min": return <p className='error'>Minmium age is 18</p>;
      case "validate": return <p className='error'>Username is already used</p>;
      default: return null;
    }
  }
  return null;
}