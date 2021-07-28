import React from 'react'
import NumberFormat from 'react-number-format';

function CardsComponent({data, title}) {
    return (
        <div className={`relative ${data.bgcolor} py-6 px-6 rounded-3xl w-256 my-4 shadow-xl`}>            
            <div className="mt-2">
                <p className="text-xl font-semibold my-2">{title.head}</p>
                <div className="flex space-x-5 text-gray-600 text-sm">
                    {/* <!-- svg  --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth="2" d="M.002 20h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619zm20.498-7c-1.932 0-3.5 1.567-3.5 3.5s1.568 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.568-3.5-3.5-3.5zm1.5 4h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm-4.814 3h-9.183l-.003-.829c0-1.679.133-2.649 2.118-3.107 2.243-.518 4.458-.981 3.394-2.945-3.156-5.82-.901-9.119 2.488-9.119 4.06 0 4.857 4.119 3.085 7.903-1.972.609-3.419 2.428-3.419 4.597 0 1.38.589 2.619 1.52 3.5z" />                        
                    </svg>
                     <p><NumberFormat value={data.cases} displayType={'text'} thousandSeparator={true} /></p> 
                </div>                
                <div className="border-t-2"></div>

                <div className="flex justify-between gap-2">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">{title.leftTitle}</p>
                        <div className="text-base text-gray-600 font-semibold">
                           <p><NumberFormat value={data.leftCases} displayType={'text'} thousandSeparator={true} /></p>
                        </div>
                    </div>
                     <div className="my-2">
                        <p className="font-semibold text-base mb-2">{title.rightTitle}</p>
                        <div className="text-base text-gray-600 font-semibold">
                            <p><NumberFormat value={data.rightCases} displayType={'text'} thousandSeparator={true} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsComponent;
