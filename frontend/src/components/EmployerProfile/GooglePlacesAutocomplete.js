import React, { useEffect, useRef, useState } from 'react';

const GooglePlacesAutocomplete = ({ onPlaceSelected }) => {
  const [ setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['geocode'],
      });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place && place.name) {
          onPlaceSelected(place.name);
        }
      });
      setAutocomplete(autocomplete);
    }
  });

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Enter a location"
      className="p-2 border rounded-md"
    />
  );
};

export default GooglePlacesAutocomplete;
