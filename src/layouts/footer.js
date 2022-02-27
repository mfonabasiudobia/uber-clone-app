export const Footer1 = () => {
   
    return (<footer className="bg-blue-900 py-5  relative text-white space-y-8">
           <div className="container grid grid-cols-2 md:grid-cols-12 gap-3 py-5">
                <div className="md:col-span-10">
                  <img src="/assets/images/logo/logo2.png" className="h-20" />
                </div>

                 <div className="md:col-span-2">
                  <ul className="space-y-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How to's</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
           </div>
           <div className="container grid grid-cols-1 md:grid-cols-2 text-white font-bold text-center md:text-left">
              <div>
                  <span>© 2022 Saturn Blockchain labs. All Rights Reserved.</span>
                </div>

                <div className="md:text-right">
                  <span>infodesk@ Saturn Blockchain labs.com</span>
                </div>
           </div>
        </footer>)
}





export const Footer2 = () => {
    return (
      <footer className="mt-96 md:mt-72 py-5">
      <div className="container grid grid-cols-1 g-5 font-bold text-center text-gray-300">
          <p>© 2022 Saturn Blockchain labs. All Rights Reserved.</p>
          <p>infodesk@ Saturn Blockchain labs.com</p>
      </div>
    </footer>)
}