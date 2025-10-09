export default function Accrodion({ children, className }) {
    return (
        <ul className={className}>
            {children}
        </ul>
    );
}