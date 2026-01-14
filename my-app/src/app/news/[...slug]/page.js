import { notFound } from "next/navigation";

const NewsDetailsPage = async ({ params }) => {
  console.log(await params);

  const data = ["general", "education", "sport"];
  const slug = (await params).slug;

  const foundData = data.find((item) => slug.includes(item));

  if (!foundData) {
    throw notFound();
  }

  return (
    <>
      <div>NewsDetailsPage</div>
      <ul>
        {slug.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="text-7xl">
        <header>News of {foundData} </header>
      </div>
    </>
  );
};

export default NewsDetailsPage;
