import React ,{useState ,useEffect}from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


const FooterSection = () => {



  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    const updateDateDisplay = () => {
      const today = new Date();
      let targetDate = new Date('2024-07-07');

      // If the current date is past the target date, update the target date to the next 15 days increment
      while (today > targetDate) {
        targetDate.setDate(targetDate.getDate() + 14);
      }

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = targetDate.toLocaleDateString(undefined, options);

      setDisplayDate(formattedDate);
    };

    updateDateDisplay();

    // Calculate the time until the next update (15 days)
    const now = new Date();
    const initialTargetDate = new Date('2024-07-07');
    let nextUpdateDate = new Date(initialTargetDate);

    // Increment the nextUpdateDate by 15 days until it's in the future
    while (now > nextUpdateDate) {
      nextUpdateDate.setDate(nextUpdateDate.getDate() + 14);
    }

    const timeToNextUpdate = nextUpdateDate - now;

    // Set a timeout for the first update
    const timeoutId = setTimeout(() => {
      updateDateDisplay();

      // Set an interval to update the date display every 15 days
      const intervalId = setInterval(updateDateDisplay, 14 * 24 * 60 * 60 * 1000);

      // Clear the timeout and return the interval cleanup function
      clearTimeout(timeoutId);
      return () => clearInterval(intervalId);
    }, timeToNextUpdate);

    return () => clearTimeout(timeoutId);
  }, []);






// To show the date and day for the 15th day from the current date, you can modify the JavaScript code as follows:

// const currentDate = new Date();
// const futureDate = new Date();
// futureDate.setDate(currentDate.getDate() + 16);

// const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
// const formattedDate = futureDate.toLocaleDateString("en-US", options);

// console.log(formattedDate);
  return (
    <footer>
        {/* sm:flex-row sm:justify-between */}
      <section className='radius-yellow fixed-footer   bg-custom-gray  sm:p-0 pb- flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
      <div>
        <div className='gap-2 p- md:flex flex-row text-red-700 text-2xl font-bold'>
        <h1 className='px-2 text-center'>Almost  Full</h1>
        {/* Blinking text */}
        <h2 className='blinking text-center'>Only 2 Seats Left</h2>
        </div>
         <p className=' font-bold px-2 text-center'>Enrollment closes on 5.00 AM  {displayDate}</p>
      </div>
      
      {/* action button */}
      <a href="https://rzp.io/l/badecisionmc">
      <div className="flex justify-center md:mt-8 sm:mt-8 py-2 sm:px-2">
          <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </div>
        </a>
      </section>
    </footer>
  )
}

export default FooterSection
