export declare class CodeTestElement extends HTMLElement {
    #private;
    state: CodeTestState;
    setState(state: CodeTestState): void;
    setStateProperties(state: Partial<CodeTestState>): void;
    setTestStateProperties(key: keyof CodeTestState, state: Partial<TestState>): void;
    findElement<T extends HTMLElement = HTMLElement>(query: string): T;
    findElements<T extends HTMLElement = HTMLElement>(query: string): T[];
    isRunning(): boolean;
    hasRun(): boolean;
    resultCategory(): TestResultCategory | undefined;
    connectedCallback(): void;
    enable(): void;
    disable(): void;
    runTest(contextManager: CodeTestsContext, testContext: TestContext): Promise<void>;
    reset(): void;
    getMessageElement(): HTMLElement;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
}

export declare const CodeTestEvent: {
    BeforeAll: string;
    AfterAll: string;
    BeforeTest: string;
    AfterTest: string;
    BeforeHook: string;
    AfterHook: string;
    Cancel: string;
    Context: string;
    Reset: string;
    TestEnd: string;
    Init: string;
    Enabled: string;
    PromptInject: string;
    PromptResult: string;
};

declare class CodeTestsContext {
    #private;
    codeTestsElement: CodeTestsElement;
    constructor(parent: CodeTestsElement);
    loadTests(path?: string): Promise<void>;
    shouldContinueRunningTests: boolean;
    runTests(tests: CodeTestElement[]): Promise<void>;
    runTest(test: CodeTestElement | undefined, inLoop: boolean, testContext?: TestContext): Promise<void>;
    runHook(testStateName: keyof Pick<CodeTestsState, 'requiredBeforeAnyState' | 'requiredAfterAnyState' | 'beforeEachState' | 'afterEachState' | 'beforeAllState' | 'afterAllState'>, test: CodeTestElement | undefined, testContext: TestContext): Promise<string | void | HTMLElement | TestResult | typeof NOTESTDEFINED>;
    parseTestResult(result: TestResultType | typeof NOTESTDEFINED, finishedTest: boolean, error?: Error): {
        result: string | HTMLElement;
        resultCategory: TestResultCategory;
    };
    createTestContext(testElement?: CodeTestElement): Promise<TestContext>;
}

export declare class CodeTestsElement extends HTMLElement {
    #private;
    state: CodeTestsState;
    setState(state: CodeTestsState): void;
    setStateProperties(state: Partial<CodeTestsState>): void;
    setTestStateProperties(key: keyof CodeTestsState, state: Partial<TestState>): void;
    findElement<T extends HTMLElement = HTMLElement>(query: string): T;
    findElements<T extends HTMLElement = HTMLElement>(query: string): Array<T>;
    getIsRunning(): boolean;
    getResultCategory(): "none" | "success" | "fail";
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    collectTestResults(): GroupTestResults;
    runTests(): Promise<void>;
    reloadTests(): Promise<void>;
    reset(): Promise<void>;
    cancel(): void;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
}

export declare type CodeTestsState = {
    isCanceled: boolean;
    beforeAllState?: TestState;
    afterAllState?: TestState;
    beforeEachState?: TestState;
    afterEachState?: TestState;
    requiredBeforeAnyState?: TestState;
    requiredAfterAnyState?: TestState;
    resetHook?: Test;
    contextHook?: Test;
};

export declare type CodeTestState = {
    testId: string;
    description: string;
    isDisabled: boolean;
    testState?: TestState;
    beforeEachState?: TestResultState;
    afterEachState?: TestResultState;
};

export declare function createElementFromTemplate(target: string | HTMLTemplateElement, parent?: HTMLElement): HTMLElement;

export declare function expect<T>(value: T): TestPromise<T>;

export declare type GroupTestResults = {
    totalTests: number;
    totalPassed: number;
    totalPercentage: number;
    duration: number;
};

export declare const Hook: {
    readonly BeforeAll: "beforeall";
    readonly AfterAll: "afterall";
    readonly BeforeEach: "beforeeach";
    readonly AfterEach: "aftereach";
    readonly RequiredBeforeAny: "requiredbeforeany";
    readonly RequiredAfterAny: "requiredafterany";
    readonly Reset: "reset";
    readonly Context: "context";
};

export declare type HookType = typeof Hook[keyof typeof Hook];

declare const NOTESTDEFINED: unique symbol;

declare function prompt_2(context: TestContext, message: string, options?: PromptOptions): Promise<boolean>;
export { prompt_2 as prompt }

export declare type PromptOptions = {
    parentElement?: HTMLElement;
    template?: HTMLTemplateElement;
    acceptLabel?: string;
    rejectLabel?: string;
    onAccept?: () => void;
    onReject?: () => void;
};

export declare type Test = <T extends TestResultType>(context: TestContext) => T | Promise<T>;

export declare type TestContext = {
    codeTestsElement: CodeTestsElement;
    testElement?: CodeTestElement;
    detail: any;
};

export declare class TestPromise<T> extends Promise<T> {
    toBeDefined(valueName?: string): Promise<void>;
    toBe(value: any, exact?: boolean): Promise<void>;
    toContainText(value: string): Promise<false | {
        success: boolean;
        index: number;
    }>;
    toHaveAttribute(value: string): Promise<void>;
}

export declare type TestResult = {
    success: boolean;
    expected?: any;
    value: string | HTMLElement;
    data?: any;
};

export declare type TestResultCategory = 'none' | 'success' | 'fail';

export declare type TestResultState = {
    hasRun: boolean;
    isRunning: boolean;
    resultCategory: TestResultCategory;
    resultContent: string | boolean | number | HTMLElement;
    duration: number;
};

export declare type TestResultType = void | undefined | string | TestResult | HTMLElement;

export declare type TestState = TestResultState & {
    test: Test;
};

export declare class TestRunnerElement extends HTMLElement {
    #private;
    state: TestRunnerState;
    setState(state: TestRunnerState): void;
    setStateProperties(state: Partial<TestRunnerState>): void;
    findElement<T extends HTMLElement = HTMLElement>(query: string): T;
    findElements<T extends HTMLElement = HTMLElement>(query: string): Array<T>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    collectTestResults(): GroupTestResults;
    runAllTests(): Promise<void>;
    getResultCategory(): string;
    reset(): Promise<void>;
    cancel(): void;
    getPromptParent(): HTMLElement;
    toggleAnalystQueueOpen(open?: boolean): void;
}

export declare type TestRunnerState = {
    isCanceled: boolean;
    isRunning: boolean;
};

export { }
