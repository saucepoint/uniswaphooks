"use client";

import Link from "next/link";
import { TreeFile } from "@/types/tree";
import { useSelectedPath } from "@component/config/FileSelected";

import { Button } from "@component/ui/Button";
import { Icons } from "@component/overall/Icons";
import { Card, CardTitle } from "@component/ui/Card";

export function SelectedFiles({
  selected,
  link,
}: {
  selected: TreeFile;
  link: string;
}) {
  const { selectedPaths, removeSelectedPath } = useSelectedPath();

  return (
    <nav className="max-w-[90%] scrollbar-thin scrollbar-thumb-gray-300 overflow-x-auto">
      {selectedPaths.length === 0 ? (
        <Card className="min-w-0 flex-none rounded-lg">
          <div className="flex items-center justify-between p-2">
            <CardTitle className="text-sm font-semibold">
              {selected.name}
            </CardTitle>
            <Button variant="outline" size="icon" className="ml-2">
              <Icons.close className="w-3 h-3" />
            </Button>
          </div>
        </Card>
      ) : (
        <div className="flex  space-x-2 p-2 ">
          {selectedPaths.reverse().map((path) => {
            return (
              <Link key={path} href={`${link}?path=${path}`}>
                <Card className="min-w-0 flex-none rounded-lg">
                  <div className="flex items-center justify-between p-2">
                    <CardTitle className="text-sm font-semibold">
                      {path}
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="icon"
                      className="ml-2"
                      onClick={() => removeSelectedPath(path)}
                    >
                      <Icons.close className="w-3 h-3" />
                    </Button>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
