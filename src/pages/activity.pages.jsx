import Header from "./../components/Header.components";
import Items from "./../components/Items.components";

function Activities() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="p-4 bg-slate-50">
        <Header />
        <Items />
        <div className="grid justify-items-center mt-4">
          <button class=" bg-indigo-500 text-white p-4 rounded-lg ">
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default Activities;
