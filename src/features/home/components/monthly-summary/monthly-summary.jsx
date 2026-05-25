import styles from './monthly-summary.module.css'

function MonthlySummary(){
    const monthlyOnGoingProjects = 8
    const monthlyCompletedProjects = 2
    const monthlyRevenue = 6000.00

    return(
    <>
        <aside id={styles.aside}>
            <table id={styles.table}>
                <caption id={styles.caption}>Neste mês</caption>
                <tbody>
                    <tr>
                        <td className={`${styles.td} ${styles.metricLabel}`} id={styles.inProgress} colSpan={2}>Em andamento</td>
                        <td className={`${styles.td} ${styles.metricValues}`} colSpan={1}>{monthlyOnGoingProjects}</td>
                    </tr>
                    <tr>
                        <td className={`${styles.td} ${styles.metricLabel}`} colSpan={2}>Concluídos</td>
                        <td className={`${styles.td} ${styles.metricValues}`} colSpan={1}>{monthlyCompletedProjects}</td>
                    </tr>
                    <tr>
                        <td className={`${styles.td} ${styles.metricLabel}`} colSpan={2}>Faturamento</td>
                        <td className={`${styles.td} ${styles.metricValues}`} colSpan={1}>R$ {monthlyRevenue}</td>
                    </tr>
                </tbody>
            </table>
        </aside>
    </>
    )
}

export default MonthlySummary;