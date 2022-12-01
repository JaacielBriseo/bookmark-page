export const ButtonToActivePanel = ({ activeTab, name, text, isActive }) => {
	return (
		<div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
			<button onClick={activeTab} name={name} className={`py-5 ${isActive === name && 'border-b-4 border-softRed'} `}>
				{text}
			</button>
		</div>
	);
};
