const NewsDetailsPage = async ({ params }) => {
  console.log(await params);

  const slug = (await params).slug;
  return (
    <>
      <div>NewsDetailsPage</div>
      <ul>
        {slug.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsDetailsPage;
