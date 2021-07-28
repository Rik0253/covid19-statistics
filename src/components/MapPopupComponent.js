import { format } from "date-fns";
import React from "react";
import NumberFormat from "react-number-format";

function MapPopupComponent({ data }) {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      {data.covData && data.covData.length > 0 ? (
        <div className="max-w-3xl w-full mx-auto z-10">
          <div className="flex flex-col">
            <div className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
              <div className="flex-none sm:flex">
                <div className="relative h-32 w-32 sm:mb-0 mb-3">
                  <img
                    src={data.covData[0].countryInfo.flag}
                    alt="aji"
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                          {data.covData[0].country}
                        </div>
                        <div className="flex-grow text-gray-400">
                          <span className="mr-2 text-justify inline-block">
                            <strong>Cases:</strong> <NumberFormat value={data.covData[0].cases} displayType={'text'} thousandSeparator={true} />
                          </span>
                          <br />
                          <span className="mr-2 text-justify inline-block">
                            <strong>Recovered:</strong>
                            <NumberFormat value={data.covData[0].recovered} displayType={'text'} thousandSeparator={true} />
                          </span>
                          <br />
                          <span className="mr-2 text-justify inline-block">
                            <strong>Deaths:</strong> <NumberFormat value={data.covData[0].deaths} displayType={'text'} thousandSeparator={true} />
                          </span>
                        </div>
                        <div className="flex pt-2  text-sm text-gray-400">
                          <div className="flex-1 inline-flex items-center">
                            <p className="">
                              Updated at:{" "}
                              {format(
                                new Date(data.covData[0].updated),
                                "MMM dd yyyy H:m a"
                              )}
                            </p>
                          </div>
                        </div>
                        
                          <a href={window.location.origin + '/country/'+ data.covData[0].countryInfo.iso3} className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                            View More
                          </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MapPopupComponent;
