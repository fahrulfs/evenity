export default function Button({ children }) {
    return (
        <button className='w-full md:w-fit lg:w-fit bg-primaryColor hover:bg-accentColor text-whiteColor px-4 py-3 rounded-md font-bold duration-200 cursor-pointer section-parag-dark'>
            <p className="section-parag-dark">
                {children}
            </p>
        </button>
    )
}