import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Badge } from "./badge";
import {
  Search,
  Plus,
  Download,
  MoreVertical,
  Mail,
  Phone,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const customers = [
  {
    id: "CUS-001",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234-567-8901",
    orders: 24,
    totalSpent: 1248.5,
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "CUS-002",
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 234-567-8902",
    orders: 18,
    totalSpent: 892.3,
    status: "active",
    joinDate: "2024-02-20",
  },
  {
    id: "CUS-003",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 234-567-8903",
    orders: 12,
    totalSpent: 654.8,
    status: "active",
    joinDate: "2024-03-10",
  },
  {
    id: "CUS-004",
    name: "David Kim",
    email: "david.kim@email.com",
    phone: "+1 234-567-8904",
    orders: 8,
    totalSpent: 423.6,
    status: "inactive",
    joinDate: "2024-01-05",
  },
  {
    id: "CUS-005",
    name: "Jessica Brown",
    email: "j.brown@email.com",
    phone: "+1 234-567-8905",
    orders: 31,
    totalSpent: 1856.9,
    status: "active",
    joinDate: "2023-12-01",
  },
  {
    id: "CUS-006",
    name: "Robert Martinez",
    email: "r.martinez@email.com",
    phone: "+1 234-567-8906",
    orders: 5,
    totalSpent: 298.4,
    status: "active",
    joinDate: "2024-04-15",
  },
];

export function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Manage Customers</h1>
          <p className="text-gray-600">View and manage your customer base</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 gap-2">
            <Plus className="w-4 h-4" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-1">Total Customers</p>
          <p className="text-gray-900">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-1">Active Customers</p>
          <p className="text-gray-900">1,089</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-1">New This Month</p>
          <p className="text-gray-900">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-1">Avg. Order Value</p>
          <p className="text-gray-900">$89.50</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search customers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600">
                        {customer.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-900">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{customer.id}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3 h-3" />
                      <span className="text-sm">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-3 h-3" />
                      <span className="text-sm">{customer.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900">
                  {customer.orders}
                </TableCell>
                <TableCell className="text-gray-900">
                  ${customer.totalSpent.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      customer.status === "active" ? "default" : "secondary"
                    }
                    className={
                      customer.status === "active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">
                  {new Date(customer.joinDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                      <DropdownMenuItem>View Orders</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
