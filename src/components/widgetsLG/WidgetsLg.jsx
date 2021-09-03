import React from 'react'
import './widgetslg.css'

const WidgetsLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetlgbutton " + type}>{type}</button>
    }
    return (
        <div className="widgetslg">
            <h3 className="widgetlgtitle">Latest Transactions</h3>
            <table className="widgetlgtable">
                <tr className="widgetlgtr">
                    <th className="widgetlgth">Customer</th>
                    <th className="widgetlgth">Date</th>
                    <th className="widgetlgth">Amount</th>
                    <th className="widgetlgth">Status</th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgtlguser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Aderibigbe Jonathan</span>
                    </td>
                    <td className="widgetlgdate">2 Sept 2021</td>
                    <td className="widgetlgamount">$130.90</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>

                <tr className="widgetlgtr">
                    <td className="widgtlguser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Aderibigbe Jonathan</span>
                    </td>
                    <td className="widgetlgdate">2 Sept 2021</td>
                    <td className="widgetlgamount">$130.90</td>
                    <td className="widgetlgstatus"><Button type="Declined" /></td>
                </tr>

                <tr className="widgetlgtr">
                    <td className="widgtlguser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Aderibigbe Jonathan</span>
                    </td>
                    <td className="widgetlgdate">2 Sept 2021</td>
                    <td className="widgetlgamount">$130.90</td>
                    <td className="widgetlgstatus"><Button type="Pending" /></td>
                </tr>

                <tr className="widgetlgtr">
                    <td className="widgtlguser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Aderibigbe Jonathan</span>
                    </td>
                    <td className="widgetlgdate">2 Sept 2021</td>
                    <td className="widgetlgamount">$130.90</td>
                    <td className="widgetlgstatus"><Button type="Declined" /></td>
                </tr>

                <tr className="widgetlgtr">
                    <td className="widgtlguser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Aderibigbe Jonathan</span>
                    </td>
                    <td className="widgetlgdate">2 Sept 2021</td>
                    <td className="widgetlgamount">$130.90</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetsLg;
