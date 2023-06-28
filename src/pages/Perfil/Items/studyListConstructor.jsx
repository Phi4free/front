import ArticlesRow from "../../../components/Home/ArticlesRow";

export function getStudyList(t, listaCompleta, listaEsperada) {
    let newList = [];
    let feature = [];
    let financial = [];
    let philosophy = [];
    let physical = [];

    listaCompleta.forEach((item) => {
        if (listaEsperada.includes(item._id)) {
            newList.push(item);
        }
    });

    newList.forEach((item) => {
        switch (item.disciplina) {
            case "physical":
                physical.push(item);
                break;
            case "feature":
                feature.push(item);
                break;
            case "finance":
                financial.push(item);
                break;
            case "philosophy":
                philosophy.push(item);
                break;
        }
    });

    return (
        <div className={"mx-4 py-2"}>
            {newList.length == 0 ? (
                <div className="text-xl text-white/50 flex text-center justify-center items-center">
                    {t("feedEmpty")}
                </div>
            ) : (
                <div>
                    {financial.length != 0 ? (
                        <ArticlesRow
                            title={t("financeTitle")}
                            items={financial}
                        />
                    ) : null}
                    {philosophy.length != 0 ? (
                        <ArticlesRow
                            title={t("philosophyTitle")}
                            items={philosophy}
                        />
                    ) : null}
                    {physical.length != 0 ? (
                        <ArticlesRow
                            title={t("physicalTitle")}
                            items={physical}
                        />
                    ) : null}
                    {feature.length != 0 ? (
                        <ArticlesRow
                            title={t("featureTitle")}
                            items={feature}
                        />
                    ) : null}
                </div>
            )}
        </div>
    );
}
