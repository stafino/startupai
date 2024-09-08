import React, { useEffect, useRef } from 'react';
import { createWidget } from '@typeform/embed';

const TypeformEmbed = ({ formId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      createWidget(formId, { container: containerRef.current });
    }
  }, [formId]);

  return <div ref={containerRef} style={{ height: '500px', width: '100%' }} />;
};

export default TypeformEmbed;