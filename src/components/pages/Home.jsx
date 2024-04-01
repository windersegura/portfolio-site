export const Home = () => {
  return (
    <>
      <nav>
        <div className="bg-lime-800 text-white h-12 content-center rounded-md">
          <ul className="flex flex-row ml-8">
            <li className="basis-1/12 hover:cursor-pointer hover:text-gray-400">
              Home
            </li>
            <li className="basis-1/12 hover:cursor-pointer hover:text-gray-400">
              Contact
            </li>
            <li className="basis-1/12 hover:cursor-pointer hover:text-gray-400">
              About
            </li>
          </ul>
        </div>
      </nav>
      <main className="bg-slate-200 rounded-md p-3">
        <div className="h-screen">
          <p>main content</p>
        </div>
      </main>
      <footer className="bg-lime-800 text-whiterounded-md h-16 text-white">
        <div className="fex flex-row text-center pt-4">
            <p className="text-xs">©{new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
