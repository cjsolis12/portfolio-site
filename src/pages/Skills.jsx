export default function Skills() {
  return (
    <div className="mt-8 md:mx-12 ">
      <div className="md:flex align-baseline justify-between gap-4 p-4 text-white">
        <div className="text-5xl text-white">
          Technologies.
        </div>
        <div className="flex justify-around gap-8">
        <div className="flex flex-col justify-between p-4">
          <div className="text-xl  text-lilac">FRONT-END</div>
         
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Tailwind</li>
            <li>BootStrap</li>
            <li>Material UI</li>
        
        </div>
        <div className="flex flex-col  p-4">
          <div className="text-xl  text-lilac">BACK-END</div>
         
            <li>Node JS</li>
            <li>Express JS</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
        
        </div>
        <div className="flex flex-col p-4 ">
          <div className="text-xl  text-lilac">Other</div>
       
            <li>Git</li>
            <li>GitHub</li>
           
            <div className="text-xl  text-lilac">Cloud</div>
            <li>AWS</li>
            <li>FireStore</li>
        </div>
        </div>
      </div>
    </div>
  );
}
