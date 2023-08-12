import Button from "@/components/buttons/Button";

const QuickAccess = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between ">
        <h3 className="text-xl font-semibold">Quick Access</h3>
      </div>
      <div className="grid grid-cols-2 gap-6 pl-4">
        <Button fullWidth size="lg" variant="outline">
          Sign Attendance
        </Button>
        <Button fullWidth size="lg" variant="outline">
          Upcoming Submissions
        </Button>
      </div>
    </div>
  );
};

export default QuickAccess;
