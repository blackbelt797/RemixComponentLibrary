import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
 return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
 return (
  <div className="flex flex-col items-center justify-center ">
   <nav className="flex flex-row justify-around my-6 w-full">
    <a href="/">Buttons</a>
    <a href="/">Navigation</a>
    <a href="/">Forms</a>
    <a href="/">Cards</a>
   </nav>

   {/* Buttons */}
   <div className="flex flex-row justify-center gap-8">
    <button
     type="button"
     className="text-white bg-blue-500 hover:bg-blue-700 w-28 px-5 py-2.5 mr-2 mb-2 rounded-lg cursor-pointer">
     Button
    </button>
    <button
     type="button"
     className="text-white bg-green-500 hover:bg-green-700 w-28 px-5 py-2.5 mr-2 mb-2 rounded-lg cursor-pointer">
     Button
    </button>
    <button
     type="button"
     className="text-white bg-red-500 hover:bg-red-700 w-28 px-5 py-2.5 mr-2 mb-2 rounded-lg  cursor-pointer">
     Button
    </button>
    <button
     type="button"
     className="text-white bg-indigo-500 hover:bg-indigo-700 w-28 px-5 py-2.5 mr-2 mb-2  rounded-lg cursor-pointer">
     Button
    </button>
    <button
     type="button"
     className="text-white bg-purple-500 hover:bg-purple-700 w-28 px-5 py-2.5 mr-2 mb-2  rounded-lg cursor-pointer">
     Button
    </button>
   </div>
   {/* Spacer */}
   <div className="my-8"></div>

   {/* Navigation */}
   <div className="flex bg-blue-900 w-full py-8 justify-end pr-6 ">
    <ul className="flex gap-4">
     <li>
      <a href="#" className="text-green-300">
       About
      </a>
     </li>
     <li>
      <a href="#" className="text-green-300">
       Info
      </a>
     </li>
     <li>
      <a href="#" className="text-green-300">
       Services
      </a>
     </li>
     <li>
      <a href="#" className="text-green-300">
       Contact
      </a>
     </li>
    </ul>
   </div>
  </div>
 );
}
