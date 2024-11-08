import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "../../lib/utils.js";
// import { toast } from "@/components/hooks/use-toast";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover";

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
});

export function DatePickerForm() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data) {
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "rounded-none bg-transparent pl-3 text-left font-normal",
                                                !field.value && "text-white"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Reservation Date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/*<Button type="submit">Submit</Button>*/}
            </form>
        </Form>
    );
}
