import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextAir } from '../../Context';
const Calander = () => {
  const [calenderAll, setCalenderAll] = useState([])
  const { ShowListHours, ReservationsForDate, GetAll } = useContextAir()
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [numberOfDaysPrevMonth, setNumberOfDaysPrevMonth] = useState(0);

  useEffect(() => {
    initDate();
    const fetchData = async () => {
      try {
        const partnersData = await GetAll();
        console.log("Hola", partnersData)
        setCalenderAll(partnersData)
        console.log(GetAll())
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [])


  useEffect(() => {
    // console.log("klk")
    // console.log(calenderAll[1])
    // console.log()

  }, [calenderAll, year, month, numberOfDays])






  useEffect(() => {

    getNoOfDays();
    getFirstDayOfMonth();
    const prevMonth = month === 0 ? 11 : month - 1; // El mes anterior al actual
    const prevYear = prevMonth === 11 ? year - 1 : year; // El año del mes anterior

    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    setNumberOfDaysPrevMonth(daysInPrevMonth);
  }, [month, year]);

  const initDate = () => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    setNumberOfDays(daysInMonth);
  };

  const getFirstDayOfMonth = () => {
    const firstDay = new Date(year, month, 1).getDay();
    setFirstDayOfMonth(firstDay);
  };

  const decreaseMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };


  // Array para almacenar las reservaciones con hora de inicio y hora final

  
  // Función para verificar si se han realizado reservaciones para todas las horas
  const Green = (date) => {
    const data =calenderAll.filter((entry) => {
      const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
      
      return (
        entry.date === formattedDate 
      );
    });
  
    for (let hour = 7; hour <= 18; hour++) {
      if (!data.some(reservation => {
        const startHour = parseInt(reservation.start.split(":")[0], 10);
        const endHour = parseInt(reservation.end.split(":")[0], 10);
        return startHour <= hour && endHour >= hour;
      })) {
        return false; // At least one hour is not reserved
      }
    }
    return true;
  }
  
  const Oragen = (date) => {
    const data =calenderAll.filter((entry) => {
      const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
  
      return (
        entry.date === formattedDate 
      );
    });
  
    for (let hour = 18; hour <= 23; hour++) {
      if (!data.some(reservation => {
        const startHour = parseInt(reservation.start.split(":")[0], 10);
        const endHour = parseInt(reservation.end.split(":")[0], 10);
        return startHour <= hour && endHour >= hour;
      })) {
        return false; // At least one hour is not reserved
      }
    }
    return true;
  }
  const Oragen2 = (date) => {
    const data =calenderAll.filter((entry) => {
      const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
  
      return (
        entry.date === formattedDate 
      );
    });
  
    for (let hour = 0; hour <= 7; hour++) {
      if (!data.some(reservation => {
        const startHour = parseInt(reservation.start.split(":")[0], 10);
        const endHour = parseInt(reservation.end.split(":")[0], 10);
        return startHour <= hour && endHour >= hour;
      })) {
        return false; // At least one hour is not reserved
      }
    }
    return true;
  }
  

  // const todasLasHorasReservadas2 = (date) => {
  //   const datos = calenderAll.filter((dato) => {
  //     const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
  
  //     return (
  //       dato.date === formattedDate &&
  //       (
  //         (parseInt(dato.start.split(":")[0], 10) >= 18 && parseInt(dato.start.split(":")[0], 10) <= 23) ||
  //         (parseInt(dato.start.split(":")[0], 10) >= 0 && parseInt(dato.start.split(":")[0], 10) <= 6)
  //       ) &&
  //       (
  //         (parseInt(dato.end.split(":")[0], 10) >= 18 && parseInt(dato.end.split(":")[0], 10) <= 23) ||
  //         (parseInt(dato.end.split(":")[0], 10) >= 0 && parseInt(dato.end.split(":")[0], 10) <= 6)
  //       )
  //     );
  //   });
  
  //   for (let hora = 18; hora <= 30; hora++) { // Cambié el límite a 30 para incluir la hora 6 am del día siguiente
  //     if (!datos.some(reservacion => {
  //       const inicioHora = parseInt(reservacion.start.split(":")[0], 10);
  //       const finHora = parseInt(reservacion.end.split(":")[0], 10);
  //       return (inicioHora <= hora && finHora >= hora) || (inicioHora <= hora + 24 && finHora >= hora + 24);
  //     })) {
  //       return false; // Hay al menos una hora sin reservaciones
  //     }
  //   }
  //   return true;
  // }
  // reservaciones.push({ inicio: "01:00", fin: "12:00" }, { inicio: "12:00", fin: "16:00" }, { inicio: "16:00", fin: "18:00" });
  // const todasReservadas = todasLasHorasReservadas();
  // console.log(`¿Todas las horas han sido reservadas? ${todasReservadas ? 'Sí' : 'No'}`);
  const increaseMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  // const horasFormato24 = Array.from({ length: 24 }, (_, i) => {
  //   const horaFormateada = i < 10 ? `0${i}` : `${i}`;
  //   return `${horaFormateada}:00`;
  // });

  // // Eliminar la primera hora (00:00)
  // const horasFormato24SinPrimeraHora = horasFormato24.slice(1);

  // console.log(horasFormato24SinPrimeraHora);


  return (
    <div>
      <div className=' w-full h-[5rem] flex items-center'>
        <div className='flex items-center justify-between py-2 px-6'>
          <div className='px-1 flex items-center'>

            <div className=' mx-4'>
              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center'
                onClick={decreaseMonth}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7'></path>
                </svg>
              </button>
              <div className=' inline-flex h-6'></div>
              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1'
                onClick={increaseMonth}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>
            <div>
              <span className="text-lg  text-black mr-1">{MONTH_NAMES[month]}</span>
              <span className="text-lg text-black font-normal">{year}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-7'>
          {DAYS.map((day, index) => (
            <div key={index} className='px-4 py-2 text-center text-gray-600 text-sm uppercase tracking-wide font-bold border-r border-t'>
              {day}
            </div>

          ))}


          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <div
              key={index}
              className=" border-r border-b flex justify-center "
              style={{ height: "120px" }}
            >
              <div className='text-gray-400 text-sm uppercase tracking-wide  text-center'>
                {numberOfDaysPrevMonth - firstDayOfMonth + index + 1}
              </div>
            </div>
          ))}
          {[...Array(numberOfDays).keys()].map((date) => (
            <div
              key={date}
              className="border-r border-b flex justify-center"
              style={{ height: "120px" }}
            >
              <Link
                to={`/hours/${date + 1}/${month}/${year}`}
                className={`mt-2 inline-flex w-6 h-6 justify-center items-center cursor-pointer text-center leading-none rounded-full hover:bg-gray-200 hover:w-8 hover:h-8 transition ease-in-out 
               ${calenderAll.some((entry) => entry.date===`${year}-${(month + 1).toString().padStart(2, "0")}-${(date+1).toString().padStart(2, "0")}`)?
               Green(date+1)===true&& Oragen(date+1)===true && Oragen2(date+1)===true?"bg-red-200":Green(date+1)===true?"bg-orange-200":"bg-green-200":""}
              
                `}
              >
                {date + 1}
              </Link>
            </div>
          ))}




        </div>
      </div>
    </div>

  );
};

export default Calander;
