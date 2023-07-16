import React from 'react';


export default function Resume() {
    return (
        <div className='flex flex-col justify-center h-100vh'>
            <button className='animate-bounce bg-aqua'><a
          href="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf"
          download="resume.pdf"
        >
          Download my Resume!
        </a></button>
        <iframe
        src="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/preview"
      />
        </div>
    )
}

