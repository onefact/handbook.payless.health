import * as React from 'react';

export function Maps(props) {
  return (
    <div>
      <iframe 
      {...props}
      allowfullscreen
      />
      <style jsx>
        {`
          iframe {
            aspect-ratio: 16 / 9;
            margin: var(--default-vertical-spacing) 0;
            border-radius: 4px;
            border: 1px solid var(--code-border);
          }
        `}
      </style>
    </div>
  );
}