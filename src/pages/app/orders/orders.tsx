import { Helmet } from "react-helmet-async";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { ArrowRight, Search, X } from "lucide-react";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
        </form>

        <div className="rouded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificado</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do Pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  1234567890
                </TableCell>
                <TableCell className="text-muted-foreground">
                  há 15 minutos
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="text-muted-foreground font-medium">
                      Pendente
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">Stéffany Caroline Teodoro da Silva</TableCell>
                <TableCell className="font-medium">R$ 149,99</TableCell>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
