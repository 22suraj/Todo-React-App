import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <h1 className="text-4xl font-bold text-center py-8 bg-gradient-to-r from-green-100 to-blue-500">
        Todo List
      </h1>
      <div class="px-10 my-5">
        <input
          type="text"
          placeholder="Enter Title"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div class="px-10 my-5">
        <textarea
          type="text"
          placeholder="Enter Description"
          class="px-3 py-3 h-20 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>

      <div className="flex ">
        <div class="px-10 my-5 flex-1">
          <input
            type="date"
            placeholder="Enter Date"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div class="px-10 my-5 flex-1">
          <input
            type="time"
            placeholder="Enter Time"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
      <div class="flex justify-center py-5 px-10">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 rounded flex-1 ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
