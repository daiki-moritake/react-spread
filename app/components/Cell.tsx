



interface CellProps {
    children: React.ReactNode;
} 

export const Cell:React.FC<CellProps> = ({ children, topCell }) => {

    
    
    return (<>
    {children}
    </>)
}

