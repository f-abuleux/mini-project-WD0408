export default function Pagination() {
    return (
        <div>
            <div className="flex justify-center gap-4">
                <button className="transition-all text-white hover:text-third">Prev</button>
                <p className="text-secondary">1</p>
                <button className="transition-all text-white hover:text-third">Next</button>
            </div>
        </div>
    )
}