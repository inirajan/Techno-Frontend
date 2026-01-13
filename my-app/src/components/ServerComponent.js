// By default it is a server components
const ServerComponent = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );

  //   console.log(data);
  return (
    <div>
      <h1 className="text-3xl text-green-200">ServerComponent</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}> {item.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComponent;
