import { orders } from '@/shared/orders'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'react-router-dom'

export function OrderBy() {
  const [order, setOrder] = useSearchParams('')

  const orderParam = order.get('order')

  function handleOrderBy(param: string) {
    setOrder({ order: param })
  }

  function clearParams() {
    setOrder((params) => {
      params.delete('order')
      return params
    })
  }

  return (
    <div className="mt-4">
      <span className="mb-4 block text-foreground">Order by:</span>

      <div className="flex flex-col gap-2">
        <div className="block">
          {order.size > 0 && (
            <Badge variant="outline" className="relative">
              {orderParam}{' '}
              <button
                onClick={clearParams}
                className="absolute right-[-8px] top-[-8px] flex h-4 w-4 items-center justify-center rounded-full border text-[8px]"
              >
                X
              </button>
            </Badge>
          )}
        </div>

        <div className="flex gap-2 md:flex-col">
          {orders.map((order) => (
            <Button
              role="button"
              variant="link"
              className="justify-start p-0"
              key={order.value}
              value={order.value}
              onClick={() => handleOrderBy(order.value)}
            >
              {order.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
