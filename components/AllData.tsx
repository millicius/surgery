import { getData } from "@/lib/action"

const AllData = async () => {
    const data = await getData();
    //console.log(data);
  return (
    <div>
      <h1>All Data <span>{data.length}</span></h1>
      <div className="mt-4 flex flex-col gap-2 text-sm">
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllData
