import { UserIcon, DocumentTextIcon, StarIcon, FolderIcon } from '@heroicons/react/24/outline';

export default function PikpokHub() {
    const handleClick = (cardName) => {
        alert(`You clicked ${cardName}`);
    };

    const cards = [
        {
            id: 'my-cards',
            title: 'My Cards',
            subtitle: '1245 Cards',
            icon: UserIcon,
            name: 'My Cards'
        },
        {
            id: 'crm',
            title: 'CRM',
            subtitle: '128 Active',
            icon: DocumentTextIcon,
            name: 'CRM',
        },
        {
            id: 'star-files',
            title: 'Star Files',
            subtitle: '42 File',
            icon: StarIcon,
            name: 'Star Files',
        },
        {
            id: 'files-multimedia',
            title: 'Files & Multimedia',
            subtitle: '380 Files',
            icon: FolderIcon,
            name: 'Files & Multimedia',
        }
    ]

    return (
        <div className="max-w-full mx-auto bg-white p-4 rounded-lg">
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>Your Pikpoks Hub</h3>

            <div className="grid grid-cols-2 gap-4">
                {cards.map((card) => {
                    const IconComponent = card.icon;
                    return (
                        <div key={card.id}
                            onClick={() => handleClick(card.name)}
                            className="bg-gray-50 p-6 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:border-blue-200 border border-gray-300">
                            
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                    <IconComponent className='w-6 h-6 text-gray-600' />
                                </div>

                                <div className="">
                                    <h4 className='font-medium text-gray-800 text-sm'>{card.title}</h4>
                                    <p className='text-xs text-gray-500 mt-1'>{card.subtitle}</p>
                                </div>
                            </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}