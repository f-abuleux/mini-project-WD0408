import ApexChartsPage from "./ApexCharts"
import TableEvent from "./TableEvent"
import TableRegistrations from "./TableRegistrations"
import TableTransactions from "./TableTranscations"

const RekapEvent = () => {
    return (
        <div>
            <div className="p-10">
                <div className="pt-5 flex gap-10">
                    <div className="w-1/2">
                        <h3 className="text-white text-2xl font-semibold">Event On-Going</h3>
                        <TableEvent />
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-white text-2xl font-semibold">Event End</h3>
                        <TableEvent />
                    </div>
                </div>
                <div className="pt-5 flex gap-10">
                    <div className="w-1/2">
                        <h3 className="text-white text-2xl font-semibold">Attendee Registrations</h3>
                        <TableRegistrations />
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-white text-2xl font-semibold">Transactions</h3>
                        <TableTransactions />
                    </div>
                </div>
                <div className="w-full pt-5">
                        <h3 className="text-white text-2xl font-semibold">Statistics</h3>
                        <ApexChartsPage />
                    </div>
            </div>
        </div>
    )
}

export default RekapEvent