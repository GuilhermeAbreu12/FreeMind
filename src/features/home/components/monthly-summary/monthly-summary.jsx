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
                <tr>
                    <td className={`${styles.td} ${styles.metricLabel}`} id={styles.inProgress}>Em andamento</td>
                    <td className={`${styles.td} ${styles.metricValues}`}>{monthlyOnGoingProjects}</td>
                </tr>
                <tr>
                    <td className={`${styles.td} ${styles.metricLabel}`}>Concluídos</td>
                    <td className={`${styles.td} ${styles.metricValues}`}>{monthlyCompletedProjects}</td>
                </tr>
                <tr>
                    <td className={`${styles.td} ${styles.metricLabel}`}>Faturamento</td>
                    <td className={`${styles.td} ${styles.metricValues}`}>R$ {monthlyRevenue}</td>
                </tr>
            </table>
        </aside>
    </>
    )
}

export default MonthlySummary;