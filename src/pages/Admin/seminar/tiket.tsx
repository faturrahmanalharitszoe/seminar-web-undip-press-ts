import Admin_Sidebar from "components/Admin_Sidebar";

export default function tiket(){
    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-screen flex flex-col p-8 gap-6 flex-grow">
                    <h1 className="text-3xl font-semibold px-2.5">Tiket Seminar</h1>
                    <div className="p-2.5">
                        <div className="container flex flex-col bg-primary-300 rounded-lg p-5 gap-2.5">
                            {/* search bar */}
                            <div className="flex justify-end">
                                <div className="mb-3 xl:w-96">
                                    <div className="input-group relative flex flex-row items-stretch w-full">
                                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-t border-l border-b border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                        <button className="btn inline-block px-6 py-2.5 bg-white border-t border-r border-b border-solid border-gray-300 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                            <img src="/icon/search.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem]">Judul</h3>
                                    <h3 className="w-[13.438rem]">Lokasi</h3>
                                    <h3 className="w-[13.438rem]">Harga Tiket</h3>
                                    <h3 className="w-[13.438rem]">Jumlah Tiket</h3>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row font-bold text-base gap-2.5 border-b-2 border-black pb-2.5">
                                    <h3 className="w-[13.438rem] h-fit break-words">asdaasdasddasdasdasdasdasdasdasdasdasd</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Online / Offline</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">Rp 50.000</h3>
                                    <h3 className="w-[13.438rem] h-fit break-words">100 Tiket</h3>
                                    <div className="flex flex-row gap-[1.875rem] align-top">
                                        <img src="/icon/edit.svg" className="w-[1.875rem]" alt="" />
                                        <img src="/icon/delete.svg" className="w-[1.875rem]" alt="" />
                                    </div>
                                </div>                                 
                            </div>
                            {/* Page */}
                            <div className="flex w-fit gap-2.5 mt-2.5 ml-auto">
                                <div className="flex p-2.5 gap-2.5 bg-danger-700 rounded-lg text-base font-medium text-white">
                                    <div className="flex align-center gap-2.5">
                                        <button><img src="/icon/chevron-double-left.svg" alt="" /></button>
                                        <button><img src="/icon/chevron-left-admin.svg" alt="" /></button>
                                    </div>
                                    <div className="flex gap-5">
                                        <button type="button">1</button>
                                        <button type="button">2</button>
                                        <button type="button">3</button>
                                        <button type="button">4</button>
                                        <button type="button" disabled>...</button>
                                    </div>
                                    <div className="flex align-center gap-2.5">
                                        <button><img src="/icon/chevron-right-admin.svg" alt="" /></button>
                                        <button><img src="/icon/chevron-double-right.svg" alt="" /></button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}