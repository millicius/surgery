import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { create } from "@/lib/action";
import AllData from "@/components/AllData";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">Surgery App</h1>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Add Surgery</AccordionTrigger>
    <AccordionContent>
      <form action={create} className="flex gap-2 outline-none">
  <Input className="focus-visible:ring-0" name="item" placeholder="Surgery" />
  <Button type="submit">Add</Button>
      </form>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<div className="mt-4">
  <AllData />
</div>
    </div>
  );
};

export default Home;