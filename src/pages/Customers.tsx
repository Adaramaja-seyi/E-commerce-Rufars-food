import {
  Search,
  Download,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234-567-8901",
    location: "New York, USA",
    orders: 24,
    totalSpent: "$1,234.50",
    status: "active",
    joinDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 234-567-8902",
    location: "Los Angeles, USA",
    orders: 18,
    totalSpent: "$892.00",
    status: "active",
    joinDate: "Feb 3, 2024",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.w@email.com",
    phone: "+1 234-567-8903",
    location: "Chicago, USA",
    orders: 31,
    totalSpent: "$2,156.75",
    status: "active",
    joinDate: "Dec 20, 2023",
  },
  {
    id: 4,
    name: "James Martinez",
    email: "james.m@email.com",
    phone: "+1 234-567-8904",
    location: "Houston, USA",
    orders: 12,
    totalSpent: "$645.20",
    status: "active",
    joinDate: "Mar 8, 2024",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "+1 234-567-8905",
    location: "Phoenix, USA",
    orders: 5,
    totalSpent: "$289.99",
    status: "inactive",
    joinDate: "Apr 12, 2024",
  },
  {
    id: 6,
    name: "David Brown",
    email: "david.b@email.com",
    phone: "+1 234-567-8906",
    location: "Philadelphia, USA",
    orders: 27,
    totalSpent: "$1,678.45",
    status: "active",
    joinDate: "Nov 5, 2023",
  },
];

export default function Customers() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Customer Management</h1>
          <p className="text-gray-600">View and manage your customer base</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
            Add Customer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Total Customers</span>
            <Users className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-gray-900">1,248</div>
          <div className="text-green-600 mt-2">↑ 12% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Active Customers</span>
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-gray-900">1,089</div>
          <div className="text-green-600 mt-2">↑ 8% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">New This Month</span>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-gray-900">142</div>
          <div className="text-green-600 mt-2">↑ 23% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Avg. Order Value</span>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-gray-900">$87.50</div>
          <div className="text-green-600 mt-2">↑ 5% from last month</div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-10" />
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-orange-100 text-orange-600">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">{customer.name}</div>
                      <div className="text-gray-500">{customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3 h-3" />
                      <span className="text-gray-900">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-3 h-3" />
                      <span className="text-gray-900">{customer.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{customer.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{customer.orders}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{customer.totalSpent}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      customer.status === "active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">{customer.joinDate}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>View Orders</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete Customer
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
