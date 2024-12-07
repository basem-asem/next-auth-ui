import React from "react";

const OrderHistorySetting = () => {
    const data = [
        {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }, {
            img: "/images/file.svg",
            date: "Nov 21, 2024",
            amount: "$25.00",
            invoiceNumber: "LXBAAO-00002",
            status: "Paid",
            downloardImg: "/images/download.svg"
        }
    ]
    return(
        <div>
            <table className='table mb-[30px]'>
                <thead className="sticky top-0 bg-white z-10">
                    <tr className="table w-[100%] table-fixed">
                        <th className="text-[14px]"></th>
                        <th className="text-[14px]">Date</th>
                        <th className="text-[14px]">Amount</th>
                        <th className="text-[14px] text-center">Invoice number</th>
                        <th className="text-[14px] text-center">Status</th>
                        <th className="text-[14px]"></th>
                    </tr>
                </thead>
                <tbody className="block overflow-y-auto max-h-[450px]">
                    {data.map((i, k) => (
                        <tr key ={k} style={{borderBottom: "1px solid black"}} className="table w-[100%] table-fixed">
                            <td className="text-[14px]"><img src={i.img} alt="data_image" width={18} height={18} /></td>
                            <td className="text-[14px]">{i.date}</td>
                            <td className="text-[14px]">{i.amount}</td>
                            <td className="text-[14px] text-center">{i.invoiceNumber}</td>
                            <td className="text-[14px] text-center">
                                <div className="cursor-pointer  w-[58px] h-[28px] rounded-[17px] bg-[#B1E458] pt-1 text-center mr-[auto] ml-[auto]">
                                    {i.status}
                                </div>
                            </td>
                            <td className="text-[14px] text-end">
                                <div className="flex justify-center">
                                    <img src={i.downloardImg} alt="data_image" width={27} height={27} className="mr-0"/>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
            </table>
            <div>
                <p className="text-[14px] text-[]">Showing 1 to 2 out of 2 invoices</p>
            </div>
        </div>
    )
}

export default OrderHistorySetting;