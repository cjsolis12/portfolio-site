import extraWork from "../../data/extraWork";

export default function ExtraWork() {
  return (
    <>
<div className="projects mt-64 pt-40">
  <h2 className="p-8 text-lilac text-5xl text-center">Other Projects / Work</h2>
  <div className="md: grid grid-cols-3 gap-8 p-8">
    {extraWork.map((extraWork, index) => (
      <div key={index} className="other-projects flex flex-col text-white border border-white rounded-lg p-8">
        <h3 className="text-center m-4 text-2xl">{extraWork.title}</h3>
        <p className="flex-grow">{extraWork.description}</p>
        <div className="mt-auto">
          <a
            href={extraWork.link}
            className="btn-link text-lilac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        </div>
      </div>
    ))}
  </div>
</div>;
    </>
  );
}
