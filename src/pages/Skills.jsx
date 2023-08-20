export default function Skills() {
  return (
    <div className="mt-8">
      <div className="flex justify-between gap-4 p-4 text-white">
        <div className="basis-1/3 text-5xl">
          Technologies.
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl  text-lilac">FRONT-END</div>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Tailwind</li>
            <li>BootStrap</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl  text-lilac">BACK-END</div>
          <ul className="list-disc pl-6">
            <li>Node JS</li>
            <li>Express JS</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl  text-lilac">Other</div>
          <ul className="list-disc pl-6">
            <li>Git</li>
            <li>GitHub</li>
            <div className="text-xl  text-lilac">Cloud</div>
            <li>AWS</li>
            <li>FireStore</li>

          </ul>
        </div>
      </div>
    </div>
  );
}
