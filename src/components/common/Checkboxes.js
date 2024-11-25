const Checkboxes = () => {
    return (
        <div>
            <div className='mt-2 mb-5'>
                <div className="flex items-center space-x-3">
                    <input
                        style={{ borderRadius: "200%" }}
                        type="checkbox"
                        id="checkbox"
                        className="w-4 h-4  border-2 border-[#5d5f5f] checked:bg-blue-500 focus:outline-none"
                    />
                    <label htmlFor="checkbox" className="text-[#5d5f5f]">I agree to the privacy policy </label>
                </div>
            </div>
        </div>
    )
}
 export default Checkboxes ; 