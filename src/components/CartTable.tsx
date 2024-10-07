import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function CartTable() {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Quantity</TableHead>
              <TableHead className="hidden md:table-cell">Sub Total</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="72"
                  src="/assets/img/destination/1.jpg"
                  width="72"
                />
              </TableCell>
              <TableCell className="font-medium">Norway Lake Tour</TableCell>

              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="hidden md:table-cell">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4">3</span>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="72"
                  src="/assets/img/destination/1.jpg"
                  width="72"
                />
              </TableCell>
              <TableCell className="font-medium">Norway Lake Tour</TableCell>

              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="hidden md:table-cell">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4">3</span>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="72"
                  src="/assets/img/destination/1.jpg"
                  width="72"
                />
              </TableCell>
              <TableCell className="font-medium">Norway Lake Tour</TableCell>

              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="hidden md:table-cell">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4">3</span>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="72"
                  src="/assets/img/destination/1.jpg"
                  width="72"
                />
              </TableCell>
              <TableCell className="font-medium">Norway Lake Tour</TableCell>

              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="hidden md:table-cell">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4">3</span>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="items-end lg:mx-20 justify-end">
        <ul className="grid gap-3 lg:w-40 w-full">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$1299.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>$5.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>$25.00</span>
          </li>
          <li className="flex items-center justify-between font-semibold">
            <span className="text-muted-foreground">Total</span>
            <span>$1329.00</span>
          </li>
          <Button className="p-6">Checkout</Button>
        </ul>
      </CardFooter>
    </Card>
  );
}
