import '../List/List.scss'

const List = ({items}) => {
    return (
        <ul className='list'>
            {items.map(item => 
                <li>
                    <i>{item.icon}</i>
                    <span>{item.name}</span>
                </li>
            )}
            
        </ul>
    )
}
export default List