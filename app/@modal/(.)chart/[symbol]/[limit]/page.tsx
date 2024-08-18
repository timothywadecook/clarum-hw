import { BarChart } from "@/components/charts/bar-chart"
import { Modal } from "./modal"
import { stocks } from "@/lib/data"
import { notFound } from "next/navigation"

type Props = {
  params: { symbol: string; limit: string }
}

export default function ModalChartPage({
  params: { symbol, limit: limitStr },
}: Props) {
  const stock = stocks.find((one) => one.symbol === symbol)
  const limit = Number(limitStr)
  if (!stock || isNaN(limit)) {
    return notFound()
  }

  return (
    <Modal title={stock.displayName} subtitle="Daily Close">
      <div className="h-80 w-full overflow-hidden">
        <BarChart maxBarHeightPx={250} symbol={symbol} limit={limit} />
      </div>
    </Modal>
  )
}
