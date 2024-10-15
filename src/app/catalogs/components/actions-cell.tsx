// ActionsCell.tsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Catalog } from "../types";
import { useCatalogs } from "@/app/contexts/catalogs-context";
import { CatalogForm } from "../catalog-form";

interface ActionsCellProps {
  catalog: Catalog; // Replace `Catalog` with the actual type of catalog
}

const ActionsCell: React.FC<ActionsCellProps> = ({ catalog }) => {
  const { deleteCatalog } = useCatalogs();

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => deleteCatalog(catalog._id)}>
            Delete Catalog
          </DropdownMenuItem>
          <DialogTrigger>
            <DropdownMenuItem>Edit Catalog</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Catalog</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CatalogForm createMode={false} catalog={catalog}></CatalogForm>
      </DialogContent>
    </Dialog>
  );
};

export default ActionsCell;
